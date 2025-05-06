import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import SaveTaskDto from './SaveTaskDto';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly tasks: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    if (!dto.name?.trim()) {
      throw new BadRequestException('Le nom de la tâche est obligatoire');
    }

    try {
      return await this.tasks.save(dto);
    } catch (e: any) {
      throw new BadRequestException(e.message);
    }
  }
}

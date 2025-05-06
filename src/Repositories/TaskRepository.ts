import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(dto: { id?: number | null; name: string }) {
    if (!dto.id) {
      return this.prisma.task.create({ data: { name: dto.name } });
    }
    return this.prisma.task.update({
      where: { id: dto.id },
      data: { name: dto.name },
    });
  }
}

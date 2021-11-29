import { Test, TestingModule } from '@nestjs/testing';
import { TrimsController } from './trims.controller';
import { TrimsService } from './trims.service';

describe('TrimsController', () => {
  let controller: TrimsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrimsController],
      providers: [TrimsService],
    }).compile();

    controller = module.get<TrimsController>(TrimsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

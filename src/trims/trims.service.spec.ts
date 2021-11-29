import { Test, TestingModule } from '@nestjs/testing';
import { TrimsService } from './trims.service';

describe('TrimsService', () => {
  let service: TrimsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrimsService],
    }).compile();

    service = module.get<TrimsService>(TrimsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

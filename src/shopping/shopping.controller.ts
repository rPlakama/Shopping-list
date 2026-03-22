import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import type { Shopping } from './shopping.interface';

@Controller('shopping')

export class ShoppingController { constructor(private readonly shoppingService: ShoppingService) {} @Post() create(@Body() item: Shopping) { this.shoppingService.create(item);

  return {
    message: 'Item adicionado com sucesso!'
  };
} @Get() findAll(): Shopping[] { return this.shoppingService.findAll();
  }
}

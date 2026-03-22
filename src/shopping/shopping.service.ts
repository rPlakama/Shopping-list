import { Injectable } from '@nestjs/common';
import type { Shopping } from './shopping.interface';

@Injectable() export class ShoppingService {
  private readonly shoppingList: Shopping[] = [];
  create(item: Shopping) {
    this.shoppingList.push(item);
  } findAll(): Shopping[] {
    return this.shoppingList;
  }
}

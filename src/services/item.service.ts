import { Request } from "express";
import { Category, Item, User } from "../entities";
import { categoryRepository, itemRepository, userRepository } from "../repositories";
import { serializedCreateItemSchema } from "../schemas";

interface IItemUpdated {
  name?: string;
  description?: string;
  quantity?: number;
  category?: string | Category;
}

class ItemService {
  create = async ({ validated, decoded }: Request) => {
    const newItem = validated as Item;
    const category = await categoryRepository.findOne({
      name: newItem.category,
    });

    newItem.category = category;
    newItem.owner = decoded as User;

    const item = await itemRepository.save(newItem);

    return await serializedCreateItemSchema.validate(item, {
      stripUnknown: true,
    });
  };

  getOneItem = async (id: string) => {
    const item = await itemRepository.findOneBy({ itemId: id });

    return await serializedCreateItemSchema.validate(item, {
      stripUnknown: true,
    });
  };

  updateItem = async (id: string, infoToUpdated: IItemUpdated) => {
    const itemUpdated = await itemRepository.findOneBy({itemId: id});
    await itemRepository.update(itemUpdated.itemId, infoToUpdated);
    const itemResponse = await itemRepository.findOneBy({itemId: id})

    return await serializedCreateItemSchema.validate(itemResponse, {
      stripUnknown: true,
    });
  };

  deleteItem = async (id: string) => {
    const item = await itemRepository.findOneBy({itemId: id});
    await itemRepository.delete(item.itemId);

    return true;
  };
}

export default new ItemService();

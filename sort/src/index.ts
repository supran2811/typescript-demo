import { Sorter } from "./Sorter";
import { NumberCollections } from "./NumberCollections";
import { CharacterCollections } from "./CharacterCollections";
import { LinkedList } from "./LinkedList";

// const collection = new NumberCollections([5, 2, 4, 1, 9, 11]);

// const sorter = new Sorter(collection);

// sorter.sort();

// console.log(collection.data);

// const collection = new CharacterCollections("Supran");

// const sorter = new Sorter(collection);

// sorter.sort();

// console.log(collection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(9);
linkedList.add(2);
linkedList.add(1);
linkedList.add(-1);
linkedList.print();

const sorter = new Sorter(linkedList);

sorter.sort();

linkedList.print();

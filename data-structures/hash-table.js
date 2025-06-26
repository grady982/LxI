class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]); 

    // console.log(this.data);

    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.set('apples', 29)
const apples = myHashTable.get('apples')
console.log(apples);



// ==============

function getFirstRecurringCharacter(data) {
    const seen = new Set();

    for (let i = 0; i < data.length; i++) {
        if (seen.has(data[i])) return data[i];
        seen.add(data[i]);
    }

    return undefined; // No recurring character found
}

const result = getFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result);
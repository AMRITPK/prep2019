function isPalindrome(word) {
    if (word.length <= 1) {
      return true;
    } else {
      return (
        word[0] === word[word.length - 1] &&
        isPalindrome(word.slice(1, word.length - 1))
      );
    }
  }
  
  class Trie {
  constructor() {
    this.children = new Map();
    this.index = -1;
    this.list = [];
  }

  insert(word, index) {
    let root = this;
    for (let i = word.length - 1; i >= 0; i--) {
      let j = word[i];

      if (!root.children.has(j)) {
        root.children.set(j, new Trie());
      }

      if (isPalindrome(word, 0, i)) {
        root.list.push(index);
      }

      root = root.children.get(j);
    }

    root.list.push(index);
    root.index = index;
  }

  search(words, currentWordIndex, res) {
    let root = this;
    for (let i = 0; i < words[currentWordIndex].length; i++) {
      // Current word is as long or longer than word in trie branch
      if (
        root.index >= 0 &&
        root.index !== currentWordIndex &&
        isPalindrome(
          words[currentWordIndex],
          i,
          words[currentWordIndex].length - 1
        )
      ) {
        res.push([currentWordIndex, root.index]);
      }

      root = root.children.get(words[currentWordIndex][i]);

      if (!root) {
        return;
      }
    }

    // Trie branch longer than word
    for (let i of root.list) {
      if (currentWordIndex !== i) {
        res.push([currentWordIndex, i]);
      }
    }
  }
}


let trie = new Trie();

let words= ["abcd","dcba","lls","s","sssll"];
for (let i = 0; i < words.length; i++) {
  trie.insert(words[i].split("").reverse().join(""), i);
}

let ret=[];
trie.search("sll",0,ret);
console.log(ret)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Tree = { [key: string]: string[] };
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'joyzaiAssignment';

  tree: Tree = {
  "a": ["b", "c"],
  "b": ["d", "e"],
  "c": ["f", "g"],
  "e": ["h", "i"],
  "f": ["j", "k"]
  };

  flatTree: { name: string; level: number }[] = [];

  constructor() {
    this.flattenTree('a', 0);
    this.display();
  }

  flattenTree(node: string, level: number) {
    this.flatTree.push({ name: node, level });

    const children = this.tree[node] || [];
    for (const child of children) {
      this.flattenTree(child, level + 1);
    }
  }
  
  display() {
    console.log(this.flatTree);
  }

}

import "./styles.css";
import React, { component } from "react";

export default function App() {
  var container = document.getElementById("array");
  function generatearray() {
    for (var i = 0; i < 20; i++) {
      var value = Math.ceil(Math.random() * 100);
      var array_ele = document.createElement("div");
      console.log(array_ele);
      array_ele.classList.add("block");
      array_ele.style.height = `${value * 3}px`;
      array_ele.style.transform = `translate(${i * 30}px)`;
      var array_ele_label = document.createElement("label");
      array_ele_label.classList.add("block_id");
      array_ele_label.innertext = value;
      array_ele.appendChild(array_ele_label);
      container.appendChild(array_ele);
    }
  }
  function swap(e1, e2) {
    return new Promise((resolve) => {
      var temp = e1.style.transform;
      e1.style.transform = e2.style.transform;
      e2.style.transform = temp;
      window.requestAnimationFrame(function () {
        setTimeout(() => {
          container.insertBefore(e1, e2);
          resolve();
        }, 250);
      });
    });
  }
  async function BubbleSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < blocks.length(); i++) {
      for (var j = 0; j < blocks.length - i - 1; j += 1) {
        blocks[j].style.backgroundColor = "red";
        blocks[j + 1].style.backgroundColor = "red";
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        console.log("run");
        var value1 = Number(blocks[j].childNodes[0].innerHTML);
        var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
        if (value1 > value2) {
          await swap(blocks[j], blocks[j + 1]);
          blocks = document.querySelectorAll(".block");
        }
        blocks[j].style.backgroundColor = "blue";
        blocks[j + 1].style.backgroundColor = "blue";
      }
      blocks[blocks.length - i - 1].style.backgroundColor = "yellow";
    }
  }
  generatearray();
  BubbleSort();
  return (
    <div className="App">
      <div id="array"></div>
    </div>
  );
}

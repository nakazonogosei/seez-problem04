// 課題 04

const members = document.getElementById("members");
const jsonPath = "member.json";

let template = (group, member, age, from, weapon) => `
  <li class="p-top-members__item">
    <span class="p-top-members__group">${group}</span>
    <span class="p-top-members__member">${member}</span>
    <span class="p-top-members__age">${age}</span>
    <span class="p-top-members__from">${from}</span>
    <span class="p-top-members__weapon">${weapon}</span>
  </li>
`;

async function fetchJson() {
  try {
    const response = await fetch(jsonPath);
    const jsonData = await response.json();
    // console.log(jsonData);

    // let jsonData01 = jsonData.slice(0, 5);
    // let jsonData02 = jsonData.slice(5, 10);
    // let jsonData03 = jsonData.slice(10, 15);
    // let jsonData04 = jsonData.slice(15, 20);
    // console.log(jsonData01);
    // console.log(jsonData02);
    // console.log(jsonData03);
    // console.log(jsonData04);

    // ページ内の要素数を指定
    let pageLength = 4;

    // 総ページ数を仮で定義
    let pageAll = 1;

    // JSONデータの要素数を、ページ内の要素数で割って、その結果により総ページ数を変数に格納
    if (jsonData.length % pageLength === 0) {
      pageAll = jsonData.length / 4;
    } else {
      pageAll = pageAll + 1;
    }

    // 生成するHTMLを格納する変数の初期化
    let outputHtml = "";
    let membersList = "";

    // 総ページ数の ul を生成
    for (let i = 0; i < pageAll; i++) {
      membersList += document.createElement("ul");
      console.log(membersList);
      let idName = "group0" + (i + 1);
      membersList.classList.add("p-top-members__list");
      membersList.setAttribute("id", idName);
    }
    // 生成した HTML を格納し ul に出力
    members.innerHTML = membersList;

    // membersList.appendChild = outputHtml;
    // membersList.innerHTML = outputHtml;

    // ul の中に li を出力
    // for (let j = 0; j < 4; j++) {
      let jsonDataLength = "jsonData" + 0;
      console.log(jsonDataLength);
    // }

    for (let j = 0; j < jsonData + 0 + j; j++) {
      outputHtml += template(
        jsonData[j].group,
        jsonData[j].member,
        jsonData[j].age,
        jsonData[j].from,
        jsonData[j].weapon
      );
    }

    // makeHtml();

    // }
    console.log(outputHtml);

    // let outputHtml01 = outputHtml.slice(0, 5);
    // let outputHtml02 = outputHtml.slice(5, 10);
    // let outputHtml03 = outputHtml.slice(10, 15);
    // let outputHtml04 = outputHtml.slice(15, 20);
    // console.log(outputHtml01);
    // console.log(outputHtml02);
    // console.log(outputHtml03);
    // console.log(outputHtml04);

    // const group01 = document.getElementById("group01");
    // const group02 = document.getElementById("group02");
    // const group03 = document.getElementById("group03");
    // const group04 = document.getElementById("group04");
    // group01.appendChild(outputHtml01);
    // group02.appendChild(outputHtml02);
    // group03.appendChild(outputHtml03);
    // group04.appendChild(outputHtml04);

    members.appendChild(outputHtml);
    // members.innerHTML = membersList;
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  fetchJson();
});

// ページング機能
// const pageCount = document.getElementById("count");
// const pagination = (jsonData) => {
//   // 初期値設定
//   let page = 1; // 現在のページ（何ページ目か）
//   const step = 5; // ステップ数（1ページに表示する項目数）

//   // 現在のページ/全ページ を表示
//   // <p class="count"></p> の中身を書き換え
//   const count = (page, step) => {
//     // 全ページ数 menuリストの総数/ステップ数の余りの有無で場合分け
//     const total = (jsonData.length % step == 0) ? (jsonData.length / step) : (Math.floor(jsonData.length / step) + 1);
//     // p.innerText = page + "/" + total + "ページ";
//     pageCount.innerText = `${page} / ${total} ページ`;
//   }

//   // ページを表示
//   // <ul class="menu_list"></ul> の中身を書き換え
//   const show = (page, step) => {
//     // const ul = document.querySelector('.menu_list');
//     // 一度リストを空にする
//     // while (members.lastChild) {
//     //   members.removeChild(members.lastChild);
//     // }

//     // 生成するHTMLを格納する変数の初期化
//     let outputHtml = "";
//     const first = (page - 1) * step + 1;
//     const last = page * step;
//     // console.log(first);
//     // console.log(last);

//     // ul の中に li を出力
//     for (let i = 0; i < jsonData.length; i++) {
//       if(i < first - 1 || i > last - 1) return;
//       outputHtml += template(
//         jsonData[i].group,
//         jsonData[i].member,
//         jsonData[i].age,
//         jsonData[i].from,
//         jsonData[i].weapon
//       );
//     }

//     // 生成した HTML を格納し ul に出力
//     // console.log(outputHtml);
//     console.log(members.appendChild(outputHtml));

//     // jsonData.forEach((item, i) => {
//     //  false          jalse
//     //  1 < 1 - 1 || 1 > 5 -1
//     //   if(i < first - 1 || i > last - 1) return;
//     //   let li = document.createElement("li");
//     //   li.innerText = item.name_jp;
//     //   members.appendChild(li);
//     // });

//     count(page,step);
//   }

//   // 最初に1ページ目を表示
//   show(page, step);

//   // 前ページ遷移トリガー
//   document.getElementById('prev').addEventListener('click', () => {
//     if(page <= 1) return;
//     page = page - 1;
//     show(page, step);
//   });

//   // 次ページ遷移トリガー
//   document.getElementById('next').addEventListener('click', () => {
//     if(page >= jsonData.length / step) return;
//     page = page + 1;
//     show(page, step);
//   });
// }

// window.addEventListener("DOMContentLoaded", () => {
//   fetchJson();
// });

// async function fetchJson() {
//   try {
//     const response = await fetch(jsonPath);
//     const jsonData = await response.json();
//     // console.log(jsonData);
//     pagination(jsonData);
//   } catch (error) {
//     console.log(error);
//   }
// }

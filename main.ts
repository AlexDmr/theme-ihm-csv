import {stringToCSV, CSV} from "./csv";

const bt = document.querySelector("button");
bt.onclick = () => {
  const str = document.querySelector("textarea").value;
  const csv: CSV = stringToCSV(str);
  console.log(csv);
  csvToTable(csv);
};


function csvToTable([titles, ...data]: CSV): void {
  const root = document.querySelector("section.tableRoot");
  const str = `<table>
                 <thead>
                   ${titles.map(t => "<th>" + t + "</th>").join('')}
                 </thead>
                 <tbody>
                   ${data.map(r => "<tr>" + r.map( d => "<td>" + d + "</td>").join('') + "</tr>").join('')}
                 </tbody>
               </table>
              `;
  root.innerHTML = str;
}

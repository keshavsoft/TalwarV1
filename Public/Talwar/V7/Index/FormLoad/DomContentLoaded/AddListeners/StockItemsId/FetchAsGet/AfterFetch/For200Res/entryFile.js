let StartFunc = ({ inResponseAsJson }) => {

    const tbody = document.getElementById('tableBody');

    let currentIndex = -1;

    // 🔥 render table
    tbody.innerHTML = inResponseAsJson.map((item, i) => `
        <tr class="border-t hover:bg-blue-100 odd:bg-gray-100">
            <td class="px-4 py-2 border text-right">${i + 1}</td>
            <td class="px-4 py-2 border">${item.SzCode}</td>
            <td class="px-4 py-2 border">${item.SzName}</td>
        </tr>
    `).join('');

};

export { StartFunc };
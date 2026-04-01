// main.js

function initMenu() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('menuBtn');

    const toggleMenu = () => {
        menu.classList.toggle('max-h-0');
        menu.classList.toggle('max-h-96');
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('opacity-100');
    };

    const closeMenu = () => {
        menu.classList.add('max-h-0', 'opacity-0');
        menu.classList.remove('max-h-96', 'opacity-100');
    };

    button.addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !button.contains(e.target)) {
            closeMenu();
        }
    });
};

function initTable() {
    const tbody = document.getElementById('tableBody');
    let currentIndex = -1;

    // data
    let rowsHTML = '';
    for (let i = 1; i <= 100; i++) {
        rowsHTML += `
        <tr class="border-t hover:bg-blue-100 odd:bg-gray-100">
            <td class="px-4 py-2 border text-right">${i}</td>
            <td class="px-4 py-2 border">Item ${i}</td>
            <td class="px-4 py-2 border">Value ${i}</td>
        </tr>`;
    }
    tbody.innerHTML = rowsHTML;

    const selectRow = (rows) => {
        rows.forEach(r => r.classList.remove('!bg-blue-400', 'text-white'));
        const row = rows[currentIndex];
        if (!row) return;
        row.classList.add('!bg-blue-400', 'text-white');
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    document.addEventListener('keydown', (e) => {
        const rows = document.querySelectorAll('#tableBody tr');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = Math.min(currentIndex + 1, rows.length - 1);
            selectRow(rows);
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = Math.max(currentIndex - 1, 0);
            selectRow(rows);
        }
    });

    tbody.addEventListener('click', (e) => {
        const rows = document.querySelectorAll('#tableBody tr');
        const row = e.target.closest('tr');
        if (!row) return;

        currentIndex = Array.from(rows).indexOf(row);
        selectRow(rows);
    });
}

// INIT (important)
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initTable();
});
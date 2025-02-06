document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы и обновление страницы
    const query = document.getElementById('searchQuery').value;
    const searchEngines = [
        { name: 'Google', url: 'https://www.google.com/search?q=' },
        { name: 'Bing', url: 'https://www.bing.com/search?q=' },
        { name: 'Yahoo', url: 'https://search.yahoo.com/search?p=' },
        { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
        { name: 'Yandex', url: 'https://yandex.ru/search/?text=' },
        { name: 'Baidu', url: 'https://www.baidu.com/s?wd=' },
        { name: 'Ask', url: 'https://www.ask.com/web?q=' },
        { name: 'AOL', url: 'https://search.aol.com/aol/search?q=' },
        { name: 'WolframAlpha', url: 'https://www.wolframalpha.com/input/?i=' },
        { name: 'Ecosia', url: 'https://www.ecosia.org/search?q=' }
    ];

    const links = document.querySelectorAll('.search-engine');
    links.forEach((link, index) => {
        link.href = searchEngines[index].url + encodeURIComponent(query);
    });

    // Уведомление пользователя, что ссылки обновлены
    alert('Ссылки обновлены! Теперь вы можете выбрать поисковую систему.');
});
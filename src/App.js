import { useEffect, useState, Suspense } from 'react';
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery';

const renderGallery = (data) => {
    if (data) {
        return (
            <Suspense fallback={<h1>Loading...</h1>}>
                <Gallery data={data} />
            </Suspense>
        );
    }
    return null;
};

const App = () => {
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('Search for Music!');
    const [data, setData] = useState(null);

    const API_URL = 'https://itunes.apple.com/search?term=';

    useEffect(() => {
        const fetchData = async () => {
            if (search) {
                document.title = `${search} music`;
                const response = await fetch(API_URL + search);
                const resData = await response.json();
                if (resData.results.length > 0) {
                    setData(resData.results);
                } else {
                    setMessage('Not Found.');
                }
            }
        };
        fetchData();
    }, [search]);

    const handleSearch = (e, term) => {
        e.preventDefault();
        setSearch(term);
    };

    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {message}
            {renderGallery(data)}
        </div>
    );
};

export default App;
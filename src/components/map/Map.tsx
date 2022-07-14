import React from 'react';

export default function Map() {
    return (
        <div style={{ width: '100%' }}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b581b7311b8d6ad30063381086c62612f47fcfeb7f0fc9a036312c2256e492f&amp;source=constructor"
                width="100%"
                height="942"
                frameBorder="0"
            />
        </div>
    );
}

import React from 'react';
import css from './style.module.scss';
// @ts-ignore
import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps';

export default function Maps() {
    const points = [[55.693297, 37.471534]];
    const mapState = {
        center: [55.692832, 37.470298],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ['drag', 'rightMouseButtonMagnifier'],
    };

    const getPointData = (index: number) => {
        return {
            balloonContentBody: 'placemark <strong>balloon ' + index + '</strong>',
            clusterCaption: 'placemark <strong>' + index + '</strong>',
        };
    };

    const getPointOptions = () => {
        return {
            preset: 'islands#violetIcon',
        };
    };
    return (
        <div className={css.wrapperMap} onLoad={() => console.log('load')}>
            <YMaps>
                <Map state={mapState} width="100%" height="100%">
                    <Clusterer
                        options={{
                            preset: 'islands#invertedVioletClusterIcons',
                            groupByCoordinates: false,
                            clusterDisableClickZoom: true,
                            clusterHideIconOnBalloonOpen: false,
                            geoObjectHideIconOnBalloonOpen: false,
                        }}
                    >
                        {points.map((coordinates, idx) => (
                            <Placemark
                                key={idx}
                                geometry={{ coordinates }}
                                properties={getPointData(idx)}
                                options={getPointOptions()}
                            />
                        ))}
                    </Clusterer>
                </Map>
            </YMaps>
        </div>
    );
}

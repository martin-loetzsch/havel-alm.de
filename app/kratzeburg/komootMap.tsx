import React from 'react';

interface KomootMapProps {
    tourId: string;
}

const KomootMap: React.FC<KomootMapProps> = ({ tourId }) => {
    return (
        <iframe src={`https://www.komoot.de/tour/${tourId}/embed?share_token=ag7kIsWCZjzLb7ivSzr4xY1Ret9JbtUKIokSZUInQLMQjYywhA`}
            width="100%" height="100%"
            loading="lazy">

            </iframe>
    );
};

export default KomootMap;

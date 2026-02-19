import React from 'react';

const ComingSoon = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
                <span className="text-4xl">🚧</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title || "Coming Soon"}</h2>
            <p className="text-gray-500 max-w-md">
                This module is currently under development. Check back later for updates.
            </p>
        </div>
    );
};

export default ComingSoon;

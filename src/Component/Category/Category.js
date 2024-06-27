import React, { useState, useEffect } from 'react';
import CategoryService from './services/CategoryService';

function CategoryList() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = () => {
        CategoryService.getAllCategory()
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi tải thể loại sách:', error);
            });
    };

    return (
        <div>
            {category.map(category => (
                <Category key={category.categoryCode} category={category} />
            ))}
        </div>
    );
}

export default CategoryList;

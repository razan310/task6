import { create } from 'zustand';
import articlesData from './data.js';

const useStore = create((set) => ({
    articles: articlesData,
    currentPage: 1, // الصفحة الحالية
    articlesPerPage: 6, // عدد المقالات لكل صفحة
    setCurrentPage: (page) => set(() => ({ currentPage: page })), // تغيير الصفحة
    getArticleById: (id) => {
        return articlesData.find(article => article.id === parseInt(id));
    },
    getArticlesByLimit: (limit) => {
        return articlesData.slice(0, limit).map(article => ({
            id: article.id,
            mainImage: article.mainImage,
            title: article.title,
            date: article.date,
            discription: article.discription,
            categories: article.categories
        }));
    },
    getArticlesByLimit_id: (limit, excludeId) => {
        return articlesData
            .filter(article => article.id !== parseInt(excludeId)) // استثناء المقال الذي يحمل id معين
            .slice(0, limit) // تحديد عدد المقالات
            .map(article => ({
                id: article.id,
                mainImage: article.mainImage,
                title: article.title,
                date: article.date,
                discription: article.discription,
                categories: article.categories
            }));
    },
    getLastArticles: (count) => {
        return articlesData.slice(-count).map(article => ({
            id: article.id,
            mainImage: article.mainImage,
            title: article.title,
            date: article.date,
            discription: article.discription,
            categories: article.categories
        }));
    },
    getAllArticles: () => {
        return articlesData.map(article => ({
            id: article.id,
            mainImage: article.mainImage,
            title: article.title,
            date: article.date,
            discription: article.discription,
            categories: article.categories
        }));
    }
}));

export default useStore;

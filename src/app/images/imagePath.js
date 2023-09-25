const imagePaths = {
    development: '/images',
    production: '/cocktail-website/images'
}

const getImagePath = () => {
    return imagePaths[process.env.NODE_ENV]
}

export default getImagePath

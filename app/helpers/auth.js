export default function auth () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Andrew',
                avatar: 'https://vk.com/photo4294707_456239021',
                uid: 'andrew'
            })
        }, 2000)
    })
}

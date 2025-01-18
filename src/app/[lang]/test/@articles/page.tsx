const Articles = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw Error('error')
    return (
        <div>
            Articales Page ✅
        </div>
    )
}

export default Articles

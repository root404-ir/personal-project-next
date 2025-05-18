export const LoadThumbnail = (res, client, setAssets) => {
    const assetId = res.items.map(item => item.fields.thumbnail?.sys.id).filter(Boolean)
    client.getAssets({ 'sys.id[in]': assetId.join(',') }).then(assetRes => {
        setAssets(assetRes.items)
    })
}


export const GetThumbnail = (thumbnailId, assets) => {
    const asset = assets.find(asset => asset.sys.id === thumbnailId)
    return asset ? `https:${asset.fields.file.url}` : null
}

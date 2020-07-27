// Los helpers son funciones que no mutan tal cual el estado del componente, como un evento
export const getGifs = async (category) => {
    // El método encodeURI  codifica espacios y caracteres especiales
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=10&api_key=hgDKm28QdpzAtF4zSKPcKDaWwHuB73AU`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        // El signo de interrogación después de la palabra images es un condicional y significa que en caso de que se encuentre el image regresará todo la propiedad
        url: img.images?.downsized_medium.url,
    }));

    return gifs;
};

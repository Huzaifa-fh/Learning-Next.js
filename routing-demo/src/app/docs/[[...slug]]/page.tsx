export default function({ params }: { params: { slug?: string[] } }) {
    const [feature, concept] = params.slug || [];

    return (
        <h1>
            {params.slug?.length === 2 
                ? `Viewing docs for feature ${feature} and concept ${concept}`
                : params.slug?.length === 1 
                ? `Viewing docs for feature ${feature}` 
                : "Docs home page"
            }
        </h1>
    );
}

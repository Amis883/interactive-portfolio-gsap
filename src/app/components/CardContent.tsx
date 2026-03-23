export default function CardContent({ card, isActive }: any) {
  if (!isActive) {
    return (
      <>
        {card.image && (
          <img
            src={card.image}
            className="w-full h-32 object-cover rounded mb-2"
          />
        )}
        <h2 className="font-semibold text-lg">{card.title}</h2>
        <p className="text-xs opacity-70 mt-2">{card.summary}</p>
      </>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 overflow-auto">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-3">{card.title}</h2>

        {card.details && (
          <ul className="text-sm space-y-2">
            {card.details.map((d: string, i: number) => (
              <li key={i}>• {d}</li>
            ))}
          </ul>
        )}

        {card.projects && (
          <div className="space-y-4">
            {card.projects.map((p: any) => (
              <div key={p.name}>
                <img
                  src={p.image}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <a href={p.link} target="_blank" className="underline text-sm">
                  {p.name}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {card.image && (
        <div className="w-full md:w-[300px] h-[250px]">
          <img
            src={card.image}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      {card.tags && (
        <div className="flex flex-wrap gap-2">
          {card.tags.map((t: string) => (
            <span
              key={t}
              className="px-3 py-1 bg-black text-white text-xs rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
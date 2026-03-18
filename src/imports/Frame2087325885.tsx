export default function Frame() {
  return (
    <div className="bg-[#f2effa] content-stretch flex flex-col items-start px-[436px] py-[56px] relative size-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
        <p className="font-['Aeonik:Regular',sans-serif] h-[60px] leading-[normal] not-italic relative shrink-0 text-[#40295b] text-[50px] tracking-[15px] uppercase w-[800px]">Ce que je cherche</p>
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[800px]">
          <div className="bg-[#d7d0ef] rounded-[20px] self-stretch shrink-0 w-[4px]" />
          <div className="flex-[1_0_0] font-['Aeonik:Regular',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#40295b] text-[24px] whitespace-pre-wrap">
            <p className="mb-0">
              {`Je recherche un poste de Lead ou Head of Product Design dans une entreprise produit ambitieuse. Je prends autant de plaisir à mettre les mains dans le craft qu'à porter une vision design à un niveau stratégique, que ces deux dimensions coexistent dans un même rôle ou non.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p className="font-['Aeonik:Bold',sans-serif]">Basé à Nantes, disponible en hybride sur Paris.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import PageContent from "@/components/layout/PageContent";
import PageTitle from "@/components/layout/PageTitle";
import BoxPublishers from "@/components/publicacoes/outras/BoxPublishers";

export default function Outras(){
    return(
        <PageContent>
            <PageTitle title="Outras publicações" />
            <p className="mt-12">Conheça outras publicações relevantes na área:</p>
            <div className="mt-8 flex flex-col gap-8">
                <BoxPublishers />
            </div>
        </PageContent>
    )
}
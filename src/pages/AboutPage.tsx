import Layout from "../shared/components/Layout/Layout";
import { APP_CONFIG } from "../shared/constants";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              À Propos de Nous
            </h1>

            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Bienvenue chez {APP_CONFIG.name}, votre destination de confiance
                pour des produits de qualité et un service exceptionnel.
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Notre Histoire
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Le JCI Maamoura Store est bien plus qu'une boutique en
                    ligne. Il s'agit d'une initiative portée par notre chambre,
                    visant à vendre des cadeaux et des récompenses au profit de
                    la Jeune Chambre de Maamoura.
                  </p>
                  <p className="text-gray-600">
                    Notre objectif est d'offrir une expérience d'achat simple et
                    agréable, tout en soutenant le développement local, l'esprit
                    d'entrepreneuriat et l'engagement communautaire dans la
                    région de Maamoura.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/480908803_971815168397561_8888272780706177013_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=70aQn2txu9YQ7kNvwHKSc_l&_nc_oc=AdlZr6i584anyT0C9Z-5Mkke52xj24woNIRViTfWz-_Z1yQJc9zl4ujGhqj5WuLsoTM&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=MJLIVkTQuBp0ldg-AN6y5g&oh=00_AfNpZzLXLzXPCSlLdqzShFuP9pDGriwl3KhvQQpOgvPveA&oe=6867A8C8"
                    alt="Notre équipe JCI Maamoura"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Produits de Qualité
                  </h3>
                  <p className="text-gray-600">
                    Nous sélectionnons soigneusement nos produits pour garantir
                    la plus haute qualité à nos clients.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Focus Communautaire
                  </h3>
                  <p className="text-gray-600">
                    Soutenir les entreprises locales et favoriser le
                    développement communautaire est au cœur de ce que nous
                    faisons.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Service Exceptionnel
                  </h3>
                  <p className="text-gray-600">
                    Notre équipe dévouée s'engage à fournir un service client et
                    un support exceptionnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

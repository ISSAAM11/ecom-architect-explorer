import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 text-white py-5">
      <div className="flex justify-center mb-2">
        <img
          src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/417436500_728846719361075_2376986869935744299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=60kRAJy3Ln8Q7kNvwE6Ve7V&_nc_oc=AdnUABAqC9Lr4k6PMc8JDhP4XpBU0GdHqwiTeqRXbnkYLYX-k_qpsegF9hIqSSjzgPw&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=dg_nWcO0_ujOk2sewd3GZQ&oh=00_AfMiIedOlZjIhkj_fUbEd9XwWcWGaIUPK32GMHZXIl3w8g&oe=6868C176"
          alt="Notre équipe JCI Maamoura"
          className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
      </div>
      <div className="container mx-auto px-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-4xl font-bold mb-5 leading-tight">
            Découvrez des
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Produits Incroyables
            </span>
          </h1>
          <p className="text-xl md:text-1xl mb-8 text-brand-100 max-w-2xl mx-auto">
            Achetez les dernières tendances et trouvez exactement ce que vous
            cherchez avec notre collection soigneusement sélectionnée
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-brand-600 px-8 py-2 rounded-lg font-semibold text-lg hover:bg-brand-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Acheter Maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

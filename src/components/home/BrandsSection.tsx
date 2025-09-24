import React from "react";
import brands from "../../data/brands";
import "./BrandsSection.css";
import { useNavigate } from "react-router-dom";

const BrandsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brandName: string) => {
    // Navigate to SearchResultPage and pass brand name as search query
    navigate(`/search?q=${encodeURIComponent(brandName)}`);
  };

  return (
    <section className="brands-section">
      <div className="brands-grid">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="brand-logo-wrapper"
            onClick={() => handleBrandClick(brand.name)}
            title={brand.name}
          >
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="brand-logo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;

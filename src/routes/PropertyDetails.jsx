
const PropertyDetails = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={property.image} alt={property.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{property.type}</div>
          <p className="mt-2 text-gray-600">{property.description}</p>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="text-sm font-semibold">Price:</div>
              <div className="ml-2 text-sm text-gray-600">${property.price}</div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-sm font-semibold">Location:</div>
              <div className="ml-2 text-sm text-gray-600">{property.location}</div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-sm font-semibold">Bedrooms:</div>
              <div className="ml-2 text-sm text-gray-600">{property.bedrooms}</div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-sm font-semibold">Bathrooms:</div>
              <div className="ml-2 text-sm text-gray-600">{property.bathrooms}</div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-sm font-semibold">Area:</div>
              <div className="ml-2 text-sm text-gray-600">{property.area} sqft</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

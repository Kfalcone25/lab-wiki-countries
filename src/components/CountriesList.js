import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="col-5">
        {countries.map((country) => (
          <Link
            to={`/${country.alpha3Code}`}
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name} flag`}
              style={{ width: '30px', height: '20px', marginRight: '10px' }}
            />
            {country.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
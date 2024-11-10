import { useEffect, useState } from 'react';
import axios from 'axios';
import PackageCard from '../components/packageCard'

const Dashboard = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const { data } = await axios.get('http://localhost:5000/api/packages');
      setPackages(data);
    };
    fetchPackages();
  }, []);

  return (
    <div class="max-w-7xl mx-auto p-6">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-10">Explore Our Travel Packages</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
                <PackageCard id={pkg._id} name={pkg.name} location={pkg.location} descip={pkg.description} price={pkg.price} />
            ))}
    </div>
  </div>
  );
};

export default Dashboard;

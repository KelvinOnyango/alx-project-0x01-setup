// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
            {name.charAt(0)}
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500">@{username}</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {email}
          </p>
          <p className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {phone}
          </p>
          <p className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            {website}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-700">Address</h3>
          <p className="text-gray-600">
            {address.suite}, {address.street}, {address.city}
          </p>
          <p className="text-gray-600">{address.zipcode}</p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-700">Company</h3>
          <p className="text-gray-800 font-medium">{company.name}</p>
          <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

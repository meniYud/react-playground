const fetchSearch = async ({ queryKey }) => {
    const {animal, location, breed} = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    if (!apiRes.ok) {
      throw new Error(`search/${animal}-${location}-${breed} fetch not OK`);
    }
  
    return apiRes.json();
  };
  
  export default fetchSearch;
  
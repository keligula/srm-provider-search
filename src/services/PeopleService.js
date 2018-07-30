import peopleData from '../data/data.json';

export default class PeopleService {
  getPeople = () => {
    return peopleData;
  };

  getPeopleByName = search => {
    const results = [];

    for (let r of peopleData) {
      if (
        r.person_name.toLowerCase().includes(search.toLowerCase()) ||
        r.organization_name.toLowerCase().includes(search.toLowerCase())
      ) {
        results.push(r);
      }
    }
    return results;
  };
}

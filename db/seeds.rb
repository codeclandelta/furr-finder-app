animals = [
    {
      api_id: 53579757,
      url: 'https://www.petfinder.com/dog/beam-53579757/wi/racine/h-dot-op-dot-e-safehouse-inc-wi90/?referrer_id=403f18d6-e98a-42cf-b0ba-e9e2e736f214',
      species: 'Dog',
      breed: 'Mixed Breed',
      age: 'Baby',
      gender: 'Female',
      size: 'Medium',
      spayed_neutered: false,
      house_trained: false,
      declawed: nil,
      special_needs: false,
      name: 'Beam',
      description: 'These two cuties are the easiest, most laid back, best puppies I have ever come across.  Not quite sure on...',
      photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53579757/1/?bust=1637035458\\u0026width=600',
      status: 'adoptable',
      status_changed_at: '2021-11-16T04:04:21+0000',
      published_at: '2021-11-16T04:04:21+0000',
      contact_info: 'hopesafehouse@gmail.com',
      contact_location: 'Racine, WI, 53405, US'
    }
    {
      api_id: 53579756,
      url: 'https://www.petfinder.com/cat/shayanne-53579756/ca/chico/friends-united-in-rescue-ca2818/?referrer_id=403f18d6-e98a-42cf-b0ba-e9e2e736f214',
      species: 'Cat',
      breed: 'Domestic Longhair',
      age: 'Adult',
      gender: 'Female',
      size: 'Large',
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      name: 'Shayanne',
      description: 'Shayanne lost her elderly owner and was left alone in the house with her sy lungs.    She is a little...',
      photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53579756/1/?bust=1637035431%5Cu0026width=600',
      status: 'adoptable',
      status_changed_at: '2021-11-16T04:03:57+0000',
      published_at: '2021-11-16T04:03:57+0000',
      contact_info: 'friendsunitedinrescue@gmail.com',
      contact_location: 'Chico, CA, 95926, US'
    }
    {
      api_id: 53579736,
      url: 'https://www.petfinder.com/rabbit/freckles-number-3-53579736/la/baton-rouge/magic-happens-rabbit-rescue-la158/?referrer_id=403f18d6-e98a-42cf-b0ba-e9e2e736f214',
      species: 'Rabbit',
      breed: 'Bunny Rabbit',
      age: 'Adult',
      gender: 'Male',
      size: 'Medium',
      spayed_neutered: true,
      house_trained: false,
      declawed: nil,
      special_needs: false,
      name: 'Freckles #3',
      description: 'Freckles came to MHRR in August 2018 as a stray from Metairie, was adopted, but came back after hurricane Ida...',
      photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53579736/1/?bust=1637265040&width=720',
      status: 'adoptable',
      status_changed_at: '2021-11-16T03:57:27+0000',
      published_at: '2021-11-16T03:57:27+0000',
      contact_info: 'Wendy@magichappensrescue.com',
      contact_location: 'Baton Rouge, LA, 70816, US'
    }
]

user = User.create! (
  {
    first_name: 'John',
    last_name: 'Brady',
    email: 'john@testing.com',
    password: '123456'
  }
  {
    first_name: 'Marisa',
    last_name: 'Young',
    email: 'marisa@testing.com',
    password: '123456'
  }
  {
    first_name: 'Mayuri',
    last_name: 'Dalavai',
    email: 'mayuri@testing.com',
    password: '123456'
  }
  {
    first_name: 'Napolean',
    last_name: 'Ochoa',
    email: 'napolean@testing.com',
    password: '123456'
  }
)

animals.each do |attribute|
  user.animals.create attribute
end
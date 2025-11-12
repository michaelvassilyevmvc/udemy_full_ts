// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

interface Animal {
  animal: 'cat' | 'dog' | 'bird',
  breed: string,
  sterilized?: string
}

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }


interface AnimalResponse {
  status: 'available' | 'not available';
  data: SuccessPayload | FailurePayload;
}

interface SuccessPayload extends Animal {
  location: string;
  age?: number;
}

interface FailurePayload {
  message: string;
  nextUpdateIn: Date
}

type Payload = SuccessPayload | FailurePayload;

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

function checkAnimalData(animal: AnimalResponse) {
  if (IsSuccessPayload(animal.data)) {
    // Заменить условие!
    return animal.data;
  } else if (IsFailurePayload(animal.data)) {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  } else {
    const smth: unknown = animal.data;
  }
}

function IsSuccessPayload(data: Payload): data is SuccessPayload {
  return (data as SuccessPayload).location !== undefined;
}

function IsFailurePayload(data: Payload): data is FailurePayload {
  return (data as FailurePayload).message !== undefined;
}

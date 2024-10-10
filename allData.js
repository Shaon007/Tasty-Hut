// console.log('all')

const loadAllFoods = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => displayAllcards(data.categories))
    .catch(error => console.log(error));
};

const displayAllcards = (categories) => {

  const petsContainer = document.getElementById("left-cards");
  petsContainer.innerHTML = "";

  if (pets.length > 0) {
    pets.forEach(pet => {
      const card = document.createElement("div");
      card.classList = " border-2 border-slate-200 w-[280px] lg:w-[300px] bg-base-100 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 shadow-xl";
      card.innerHTML = `
      <figure class="p-6 mx-auto">
        <img src=${pet.image} class="rounded-lg w-[272px] h-[160px]" />
      </figure>
      <div class="px-6 items-start">
        <h2 class="font-bold pb-2 text-xl">${pet.pet_name || "Unknown"}</h2>
        <div class="flex items-center gap-2">
          <img class="h-4 " src="./images/Frame.png"/>
          <p>Breed: ${pet.breed || "Unknown"}</p>
        </div>
        <div class="flex items-center gap-2">
          <img class="h-4 " src="./images/file.png"/>
          <p>Birth: ${pet.date_of_birth || "Unknown"}</p>
        </div>
        <div class="flex items-center gap-2">
          <img class="h-4 " src="./images/br.png"/>
          <p>Gender: ${pet.gender || "Unknown"}</p>
        </div>
        <div class="flex items-center gap-2">
          <img class="h-4 " src="./images/s.png"/>
          <p>Price: ${pet.price ? `$${pet.price}` : "Not Available"}</p>
        </div>
        <hr class="border-2 border-gray-200 w-[250px] my-4" />
      </div>
      <div class="card-actions lg:mx-4 justify-around pb-6 flex ">
        <div>
        <button class="btn border-1 border-slate-400" onclick="likePet('${pet.image}')"><img src="./images/th.png"/></button>
        </div>

        <div>
        <button id="ad_btn" class="btn border-1 border-slate-400 text-lg text-[#0E7A81]" onclick="adoptPet('${pet.pet_name}')">Adopt</button>
        </div>

        <div>
        <button class="btn border-1 border-slate-400 text-lg text-[#0E7A81]" onclick="showDetails('${pet.petId}')">Details</button>
        </div>
      </div>
    `;
      // likedContainer.classList.remove("hidden")
      petsContainer.appendChild(card);
    })

  }
  else if (pets.length == 0) {

    const card = document.createElement("div");
    card.innerHTML = `
     <div class="w-[285px] md:w-[500px] lg:w-[800px] h-[491px] rounded-lg flex flex-col items-center justify-center  bg-gray-300">
       <div class="  md:p-6  w-full text-center">
          <img src="./images/error.png" alt="No Information" class=" mx-auto mb-6">
          <h2 class=" text-2xl font-bold ">No Information Available</h2>
          <p class="text-gray-600 w-5/6 md:w-2/3 mx-auto my-6">
          If there is no available data on the selected pet, we encourage you to explore our diverse range of pets and categories. Each pet has a unique story, and we believe that every pet deserves a loving home.


          </p>
       </div>
     </div>

     `

    petsContainer.appendChild(card);
  }
};

console.log(data)
loadAllFoods()
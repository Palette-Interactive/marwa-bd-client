import React, {useEffect, useRef} from 'react'

const apiKey = "AIzaSyDHbn526q5hbhl_WzgOFaj7yBxUj1pJjp8";
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';

function loadAsyncScript(src) {
    return new Promise(resolve => {
      const script = document.createElement("script");
      Object.assign(script, {
        type: "text/javascript",
        async: true,
        src
      })
      script.addEventListener("load", () => resolve(script));
      document.head.appendChild(script);
    })
  }

export default function LocationAutoCompleteInput() {
    const searchInput = useRef(null);
    // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if(window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  }

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
  }

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

  }

  useEffect(() => {
    initMapScript().then(() => initAutocomplete())
  }, []);

  return (
    <div>
         <input ref={searchInput} className="mb-3 form-control fw-bold form-control" type="text" placeholder="Search location...."/>
    </div>
  )
}

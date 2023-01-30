import {useEffect} from 'react';

function ScrollToSection({id}) {
  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, [id]);

  return null;
}

export default ScrollToSection;

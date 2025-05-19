async function nactiData() {
  try {
    const odpoved = await fetch('https://api.example.com/data');
    const data = await odpoved.json();
    console.log(data);
  } catch (error) {
    console.error('Chyba při načítání:', error);
  }
}

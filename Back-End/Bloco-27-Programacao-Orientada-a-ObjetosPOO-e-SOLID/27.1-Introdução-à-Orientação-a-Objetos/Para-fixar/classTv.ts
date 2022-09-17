class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  };

  turnOn () {
    console.log(this._brand, this._size, this._resolution, this._connections, this._connectedTo);
  }

  setConnectedTo (connectedTo: string | undefined) {
    if (!connectedTo || this._connections.includes(connectedTo)) {
      this._connectedTo = connectedTo;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

  getConnectedTo (): string | undefined {
    return this._connectedTo;
  }
}

const tv1 = new Tv('Sansung', 65, '4K', ['Hdmi', 'Ethernet', 'Usb' ]);

tv1.setConnectedTo('Usb')

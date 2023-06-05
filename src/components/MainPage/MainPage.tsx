import React , { useState , useEffect, useRef, ChangeEvent} from 'react';
import "./MainPage.css"
import "./FormsElements.css"
import BackShape from "../imgs/back-shape.svg";
import Camera from "../imgs/camera.svg";
import Player from "../imgs/player.svg";

type FormProps = {
  onNext: () => void;
  onBack: () => void;
};

const MainPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(0); 
  const listItems = [
    'Легковые',
    'Мото',
    'Коммерческий',
    'Каталог',
    'Отзывы',
    'Дилерам',
    'Осмотрщикам',
    'Логистам',
    'Кредиты',
  ];
  const [currentForm, setCurrentForm] = useState<number>(1);
  const [completedForms, setCompletedForms] = useState<number[]>([]); // Состояние для отслеживания завершенных форм


  const handleClickDiv = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  }

  const handleClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
    if (completedForms.includes(index + 1)) {
      setCurrentForm(index + 1);
    }
  };
  
  const handleBack = () => {
    if (currentForm > 1) {
      const previousForm = currentForm - 1;
      setCurrentForm(previousForm);
      setSelectedItem(previousForm - 1);
    }
  };

  const handleNextForm = () => {
    setCompletedForms([...completedForms, currentForm]);
    setCurrentForm(currentForm + 1);
  };
  
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <Form1 onNext={handleNextForm} onBack={handleBack}/>;
      case 2:
        return <Form2 onNext={handleNextForm} onBack={handleBack}/>;
      case 3:
        return <Form3 onNext={handleNextForm} onBack={handleBack}/>;
      case 4:
        return <Form4 onNext={handleNextForm} onBack={handleBack}/>;
      case 5:
        return <Form5 onNext={handleNextForm} onBack={handleBack}/>;
      case 6:
        return <Form6 onNext={handleNextForm} onBack={handleBack}/>;
      case 7:
        return <Form7 onNext={handleNextForm} onBack={handleBack}/>;
      case 8:
        return <Form8 onNext={handleNextForm} onBack={handleBack}/>;
      default:
        return null;
    }
  };

  return (
    <div className="main">
      <div className="head-announcement__container">
        <ul className="head-announcement__list">
          {listItems.map((item, index) => (
            <li
              key={index}
              className={index === selectedItem ? 'highlighted' : ''}
              onClick={() => handleClickDiv(index)}
            >
              <div className="content">
                <p>{item}</p>
                {index === selectedItem && (
                  <span className="selected-indicator"></span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='body-announcement__container'>
        <a className='ref__now-page'><p>Главная / Новое объявление</p></a>
        <div className='add-announcement__container'>
          <div className='list-requirements'>
            <h2>Новое объявление</h2>
            <ul>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(1) ? 'completed' : ''}`} checked={currentForm >= 1} onChange={() => handleClick(0)} disabled/>
                  <span className="radio__button"></span>
                  VIN номер
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(2) ? 'completed' : ''}`} checked={currentForm >=  2} onChange={() => handleClick(1)} disabled/>
                  <span className="radio__button"></span>
                  Госномер
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(3) ? 'completed' : ''}`} checked={currentForm >=  3} onChange={() => handleClick(2)} disabled/>
                  <span className="radio__button"></span>
                  Характеристики
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(4) ? 'completed' : ''}`} checked={currentForm >=  4} onChange={() => handleClick(3)} disabled/>
                  <span className="radio__button"></span>
                  Фото и видео
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(5) ? 'completed' : ''}`} checked={currentForm >=  5} onChange={() => handleClick(4)} disabled/>
                  <span className="radio__button"></span>
                  Карта повреждений
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(6) ? 'completed' : ''}`} checked={currentForm >=  6} onChange={() => handleClick(5)} disabled/>
                  <span className="radio__button"></span>
                  Описание
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(7) ? 'completed' : ''}`} checked={currentForm >=  7} onChange={() => handleClick(6)} disabled/>
                  <span className="radio__button"></span>
                  Контактные данные
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(8) ? 'completed' : ''}`} checked={currentForm >=  8} onChange={() => handleClick(7)} disabled/>
                  <span className="radio__button"></span>
                  Стоимость
                </label>
              </li>
            </ul>
          </div>
          <div className='add-announcement__element'>
            {renderForm()}
          </div>
        </div>
      </div>
  </div>
);
}
const Form1: React.FC<FormProps> = ({ onNext, onBack }) => {
  const [vinNumber, setVinNumber] = useState('');

  const handleContinue = () => {
    // Use the `vinNumber` value for further processing or validation
    console.log('VIN Number:', vinNumber);

    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const handleVinNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVinNumber(event.target.value);
  };

  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>VIN номер</h3>
        <p>Закрыть</p>
      </div>
      <p>Введите VIN и мы поможем заполнить объявление автоматически</p>
      <input
        className='form-number__input'
        placeholder="VIN номер"
        value={vinNumber}
        onChange={handleVinNumberChange}
      />

      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape} alt="Back" /></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};

  const Form2 = ({ onNext , onBack}: FormProps) => {
    const [licensePlate, setLicensePlate] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
  
    const handleContinue = () => {
      localStorage.setItem('carStateNumber', licensePlate);
      localStorage.setItem('isCarRegisterInState', String(isRegistered));
  
      onNext();
    };
  
    const handleBack = () => {
      onBack();
    };
  
    const handleLicensePlateChange = (event: ChangeEvent<HTMLInputElement>) => {
      setLicensePlate(event.target.value);
    };
  
    const handleIsRegisteredChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsRegistered(event.target.checked);
    };
  
    return (
      <div className='form__container'>
        <div className='form__container-header'>
          <h3>Госномер</h3>
          <p>Закрыть</p>
        </div>
        <p>Введите госномер вашего автомобиля</p>
        <input
          className='form-number__input'
          placeholder="A 001 AA 777"
          value={licensePlate}
          onChange={handleLicensePlateChange}
        />
        <div className='input__button'>
          <p>Не стоит на учёте в РФ</p>
          <label className="switch-toggle">
            <input type="checkbox" checked={isRegistered} onChange={handleIsRegisteredChange} />
            <span className="slider"></span>
          </label>
        </div>
        <div className='button-container'>
          <button className='back' onClick={handleBack}><img src={BackShape} alt="Back" /></button>
          <button className='skip' onClick={handleContinue}><p>Пропустить</p></button>
          <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
        </div>
      </div>
    );
  };

const Form3 = ({ onNext , onBack}: FormProps) => {
  const [formData, setFormData] = useState({
    carMark: '',
    carModel: '',
    yearOfRelease: '',
    bodyType: '',
    carGeneration: '',
    engineType: '',
    driveUnits: '',
    transmission: '',
    modification: '',
    steering: '',
    color: '',
    mileage: '',
    pts: '',
    ownerCount: '',
    condition: '',
    lpgEquipment: '',
    options: ''
  });

  const handleContinue = () => {
    localStorage.setItem('formData', JSON.stringify(formData));

    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className='form__container-long'>
      <div className='form__container-header'>
        <h3>Характеристики</h3>
        <p>Закрыть</p>
      </div>
      <div className='form__container-inputs first'>
        <input
          className='form-number__input-short'
          placeholder="Марка"
          name="brand"
          value={formData.carMark}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Модель"
          name="model"
          value={formData.carModel}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="Год выпуска"
          name="year"
          value={formData.yearOfRelease}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Тип кузова"
          name="bodyType"
          value={formData.bodyType}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="Поколение"
          name="generation"
          value={formData.carGeneration}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Тип двигателя"
          name="engineType"
          value={formData.engineType}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="Привод"
          name="driveType"
          value={formData.driveUnits}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Коробка"
          name="transmission"
          value={formData.transmission}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="Модификация"
          name="modification"
          value={formData.modification}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Руль"
          name="steering"
          value={formData.steering}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="Цвет"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Пробег,км"
          name="mileage"
          value={formData.mileage}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="ПТС"
          name="pts"
          value={formData.pts}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Количество владельцев"
          name="ownerCount"
          value={formData.ownerCount}
          onChange={handleInputChange}
        />
      </div>
      <div className='form__container-inputs'>
        <input
          className='form-number__input-short'
          placeholder="Состояние"
          name="condition"
          value={formData.condition}
          onChange={handleInputChange}
        />
        <input
          className='form-number__input-short'
          placeholder="Газобалонное оборудование"
          name="lpgEquipment"
          value={formData.lpgEquipment}
          onChange={handleInputChange}
        />
      </div>
      <input
        className='form-number__input-short'
        placeholder="Опции"
        name="options"
        value={formData.options}
        onChange={handleInputChange}
      />
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape} alt="Back" /></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};


const Form4: React.FC<FormProps> = ({ onNext, onBack }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages(files);
    }
  };

  const handleContinue = () => {
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const openFileSelection = () => {
    fileInputRef.current?.click();
  };

  const renderSelectedImages = () => {
    if (selectedImages) {
      const imageArray = Array.from(selectedImages);
      return imageArray.map((image, index) => (
        <img
          key={index}
          src={URL.createObjectURL(image)}
          alt={`Image ${index + 1}`}
        />
      ));
    }
    return null;
  };

  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Фото и видео</h3>
        <p>Закрыть</p>
      </div>
      <div className="custom-file-input">
        <div className="input-wrapper">
          <label htmlFor="photo-input" className={`input-label ${selectedImages ? 'has-images' : ''}`}>
            <div className="selected-images-container">
              {renderSelectedImages()}
            </div>
            <img src={Camera} alt="Camera" className="camera-icon" />
            <p>Добавить фото</p>
          </label>
          <input
            id="photo-input"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileInputChange}
          />
        </div>
        <p className='small-text'>Госномер должен быть хорошо виден на фото. Он будет спрятан за брендовой табличкой. Максимум 30 фото</p>
      </div>
      <div className="custom-file-input">
        <label htmlFor="video-input">
          <img src={Player} alt="Player" />
          <p>Видео</p>
        </label>
        <input
          id="video-input"
          ref={fileInputRef}
          type="file"
          accept="video/*"
          multiple
          onChange={handleFileInputChange}
        />
        <p className='small-text'>Максимальная длина видео 1 минута</p>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape} alt="Back" /></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};


const Form5 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Карта повреждений</h3>
        <p>Закрыть</p>
      </div>

      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};

const Form6 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Описание</h3>
        <p>Закрыть</p>
      </div>
      <div>
        <textarea className='form-number__textarea' placeholder="Расскажите о достоинствах и недостатках вашего автомобиля"/>
        <p className='small-text'>Не указывайте ссылки, телефоны, цену и предлагать услуги, не связанные с продажей этого транспортного средства</p>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};
const Form7 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Контактные данные</h3>
        <p>Закрыть</p>
      </div>
      <div className='form__container-inputs first2'>
        <input className='form-number__input-short' placeholder="Имя"/>
        <input className='form-number__input-short' placeholder="Город продажи"/>
      </div>
      <div className='form__container-inputs '>
        <input className='form-number__input-short' placeholder="Способ связи"/>
        <input className='form-number__input-short' placeholder="Телефон"/>
      </div>
      <div className='input__button'>
        <p>Защита номера от спама</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div>
        <p className='small-text'>В объявлении мы покажем поддменный телефонный номер. <br></br> Звонок поступит на ваш ностоящий номер, без СМС</p>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};
const Form8 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Стоимость</h3>
        <p>Закрыть</p>
      </div>
      <input className='form-number__input' placeholder="Цена"/>
      <div className='input__button'>
        <p>Возможен обмен</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className='buttons'>
        <p>Размещая объявления, вы соглашаетесь с правилами Автовилл.ру</p>
        <div className='button-container'>
          <button className='back' onClick={handleBack}><img src={BackShape}/></button>
          <button className='public' onClick={handleContinue}><p>Опубликовать</p></button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;




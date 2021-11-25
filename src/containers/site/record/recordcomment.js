import React from 'react';

const RecordComment = () => {
  return (
    <div className="comments">
      <h3 className="comments__header">важно!</h3>
      <p>
        В соответствии с распоряжениями Главного государственного санитарного
        врача РФ, Правительства РФ, Министерства здравоохранения Российской
        Федерации, мы не сможем Вас принять в случаях:
      </p>
      <ul>
        <li>
          посещения Вами зарубежных стран за последние 14 дней и менее, в случае
          контакта с гражданами, приехавшими из-за рубежа в течение 14 дней и
          менее;
        </li>
        <li>
          посещения Вами регионов - Москва, Московская область, Санкт-Петербург,
          Ленинградская область, в случае контакта с гражданами, приехавшими из
          указанных регионов в течение 14 дней и менее;
        </li>
        <li>
          в случае контактов за последние 14 дней с лицами, находящимися под
          наблюдением по инфекции, вызванной коронавирусом CoVID-19, которые в
          последующем заболели;
        </li>
        <li>
          в случае контакта за последние 14 дней с лицами, у которых лабораторно
          подтвержден диагноз CoVID-19.
        </li>
      </ul>
    </div>
  );
};

export default RecordComment;

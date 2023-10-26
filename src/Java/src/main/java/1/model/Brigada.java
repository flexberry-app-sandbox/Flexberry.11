package 1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Бригада
 */
@Entity(name = "IIS1Бригада")
@Table(schema = "public", name = "Бригада")
public class Brigada {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Код")
    private String код;

    @Column(name = "ДатаНачалаБригады")
    private Date датаначалабригады;

    @Column(name = "ДатаРаспадаБригады")
    private Date датараспадабригады;


    public Brigada() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКод() {
      return код;
    }

    public void setКод(String код) {
      this.код = код;
    }

    public Date getДатаНачалаБригады() {
      return датаначалабригады;
    }

    public void setДатаНачалаБригады(Date датаначалабригады) {
      this.датаначалабригады = датаначалабригады;
    }

    public Date getДатаРаспадаБригады() {
      return датараспадабригады;
    }

    public void setДатаРаспадаБригады(Date датараспадабригады) {
      this.датараспадабригады = датараспадабригады;
    }


}
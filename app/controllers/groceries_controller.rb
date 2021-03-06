class GroceriesController < ApplicationController
  before_action :set_grocery, only: [:show, :edit, :update, :destroy]

  # GET /groceries
  # GET /groceries.json
  def index
    @groceries = Grocery.all
    # @groceries = Grocery.order(name: :asc)
  end

  # GET /groceries/1
  # GET /groceries/1.json
  def show
    @grocery = Grocery.find(params[:id])
  end

  # GET /groceries/new
  def new
    @grocery = Grocery.new
  end

  # GET /groceries/edit
  def edit
  end

  # POST /groceries
  # POST /groceries.json
  def create
    @grocery = Grocery.new(grocery_params)

    respond_to do |format|
      if @grocery.save
        format.html { redirect_to @grocery, notice: 'Grocery item was successfully created.' }
        format.json { render action: 'show', status: :created, location: @grocery }
      else
        format.html { render action: 'new' }
        format.json { render json: @grocery.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /groceries/1
  # PATCH/PUT /groceries/1.json
  def update
    respond_to do |format|
      if @grocery.update(grocery_params)
        format.html { redirect_to @grocery, notice: 'Grocery item was successfully updated.' }
        format.json { head :no_content}
      else
        format.html { render action: 'edit' }
        format.json { render json: @grocery.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groceries/1
  # DELETE /groceries/1.json
  def destroy
    @grocery.destroy
    respond_to do |format|
      format.html {redirect_to groceries_url}
      format.json {head :no_content}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery
      @grocery = Grocery.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def grocery_params
      params.require(:grocery).permit(:name, :healthy)
    end

end
